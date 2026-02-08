# Api_Rest_Full
npm init -y
npm install typescript --save-dev
npx tsc --init
npm install ts-node --save-dev

📦 Dependências de PRODUÇÃO (dependencies)

Essas vão junto pro deploy:

npm install express cors dotenv bcryptjs jsonwebtoken mysql mysql2

🧪 Tipagens usadas em runtime (estão no seu dependencies)

⚠️ Observação: o ideal seria que todas as @types/* ficassem em devDependencies, mas vou seguir o que está no seu package.json.

npm install @types/bcryptjs @types/cors @types/jsonwebtoken @types/mysql @types/node

🛠️ Dependências de DESENVOLVIMENTO (devDependencies)
npm install -D typescript tsx ts-node ts-node-dev prisma @types/express

🔁 Comandos alternativos (organização ideal — dica profissional)

Se quiser organizar melhor (recomendado):

npm install -D @types/bcryptjs @types/cors @types/jsonwebtoken @types/mysql @types/node


👉 @types/* não deveriam estar em dependencies.

🧠 Resumo rápido
Categoria	Comando
Produção	npm install express cors dotenv bcryptjs jsonwebtoken mysql mysql2
Tipagens	npm install @types/...
Dev	npm install -D typescript tsx ts-node ts-node-dev prisma @types/express

# npx @dotenvx/dotenvx run -- npx prisma migrate reset

