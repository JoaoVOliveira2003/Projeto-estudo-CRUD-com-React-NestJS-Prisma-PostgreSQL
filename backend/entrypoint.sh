#!/bin/sh

npm run build
npx prisma migrate reset -f
npx prisma db seed
npm run start:prod