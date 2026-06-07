#!/bin/sh

npm run build
npx prisma migrate reset --force || true
npx prisma db seed || true
npm run start:prod