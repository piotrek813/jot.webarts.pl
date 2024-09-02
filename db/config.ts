import { column, defineDb, defineTable } from 'astro:db';

const email = defineTable({
  columns: {
    email: column.text(),
    createdAt: column.date(),
  }
})

export default defineDb({
  tables: { Email: email },
})
