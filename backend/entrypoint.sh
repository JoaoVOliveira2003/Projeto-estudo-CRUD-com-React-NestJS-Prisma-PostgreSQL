#!/bin/sh

npx prisma migrate reset --force
npx prisma db seed
npm run start:prod