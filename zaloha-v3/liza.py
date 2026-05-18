import sqlite3,os,uuid
from datetime import datetime
p=os.path.expanduser("~/imprints.db")
def idb():
 c=sqlite3.connect(p)
 x=c.cursor()
 x.execute("CREATE TABLE IF NOT EXISTS imprints (id TEXT PRIMARY KEY,ts TEXT,ctx TEXT,forma TEXT,zamer TEXT,kontext TEXT,nove TEXT,pred TEXT,istota REAL)")
 x.execute("CREATE TABLE IF NOT EXISTS patterns (id TEXT PRIMARY KEY,ts TEXT,key TEXT,val TEXT)")
 c.commit()
 c.close()
 print("DB OK")
def si(d):
 c=sqlite3.connect(p)
 x=c.cursor()
 ctx=d.get("ctx","neznamy")
 x.execute("DELETE FROM imprints WHERE ctx=?",(ctx,))
 iid=str(uuid.uuid4())[:8]
 ts=datetime.now().isoformat()
 x.execute("INSERT INTO imprints VALUES (?,?,?,?,?,?,?,?,?)",(iid,ts,ctx,d.get("forma",""),d.get("zamer",""),d.get("kontext",""),d.get("nove",""),d.get("pred",""),float(d.get("istota",0.0))))
 c.commit()
 c.close()
 print("OK: "+ctx)
def li():
 c=sqlite3.connect(p)
 x=c.cursor()
 x.execute("SELECT ts,ctx,forma,zamer,istota FROM imprints ORDER BY ts DESC")
 r=x.fetchall()
 c.close()
 if not r:
  print("Ziadne.")
  return
 for i in r:
  print(i[0][:16]+" | "+i[1]+" | "+i[2]+" | "+str(i[4]))
def fc(ctx):
 c=sqlite3.connect(p)
 x=c.cursor()
 x.execute("SELECT ts,ctx,forma,zamer,nove,pred,istota FROM imprints WHERE ctx LIKE ?",("%"+ctx+"%",))
 r=x.fetchall()
 c.close()
 if not r:
  print("Nenajdene.")
  return
 for i in r:
  print("---")
  print(i[1]+" | "+i[2]+" | "+i[4]+" | "+str(i[6]))
def sp(k,v):
 c=sqlite3.connect(p)
 x=c.cursor()
 x.execute("DELETE FROM patterns WHERE key=?",(k,))
 x.execute("INSERT INTO patterns VALUES (?,?,?,?)",(str(uuid.uuid4())[:8],datetime.now().isoformat(),k,v))
 c.commit()
 c.close()
 print("Vzor: "+k)
def gp():
 c=sqlite3.connect(p)
 x=c.cursor()
 x.execute("SELECT key,val FROM patterns")
 r=x.fetchall()
 c.close()
 if not r:
  print("Ziadne.")
  return
 for i in r:
  print(i[0]+": "+i[1])
idb()
print("1=uloz 2=zoznam 3=hladaj 4=vzor 5=vzory 0=koniec")
while True:
 cmd=input(">> ").strip()
 if cmd=="0":
  break
 elif cmd=="1":
  ctx=input("ctx: ")
  forma=input("forma: ")
  zamer=input("zamer: ")
  kontext=input("kontext: ")
  nove=input("nove: ")
  pred=input("predikcia: ")
  istota=input("istota: ")
  si({"ctx":ctx,"forma":forma,"zamer":zamer,"kontext":kontext,"nove":nove,"pred":pred,"istota":istota})
 elif cmd=="2":
  li()
 elif cmd=="3":
  fc(input("ctx: "))
 elif cmd=="4":
  sp(input("key: "),input("val: "))
 elif cmd=="5":
  gp()
 else:
  print("?")
