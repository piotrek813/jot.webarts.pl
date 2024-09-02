import { db, Email } from 'astro:db';

export default async function() {
  await db.insert(Email).values([
    { email: "dupa", createdAt: new Date() },
  ]);
}
