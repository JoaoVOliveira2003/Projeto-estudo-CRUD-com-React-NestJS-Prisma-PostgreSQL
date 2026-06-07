#!/bin/sh

npm run build
npx prisma migrate reset --force
npx prisma db seed
npm run start:prod