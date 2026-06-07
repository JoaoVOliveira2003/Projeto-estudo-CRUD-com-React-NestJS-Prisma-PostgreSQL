#!/bin/sh

npx prisma migrate reset --force
npx ts-node prisma/seed.ts
npm run start:prod
