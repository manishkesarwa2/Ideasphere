import { NextResponse } from 'next/server';
import { Pool } from 'pg';

export async function POST(request: Request) {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });

  try {
    const body = await request.json();
    const { name, email, company, interest, message } = body;

    // Validate required fields
    if (!name || !email || !interest || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Insert contact into database using raw SQL
    const result = await pool.query(
      `INSERT INTO contacts (id, name, email, company, interest, message, "createdAt")
       VALUES (gen_random_uuid()::text, $1, $2, $3, $4, $5, NOW())
       RETURNING id`,
      [name, email, company || null, interest, message]
    );

    await pool.end();

    return NextResponse.json(
      { success: true, id: result.rows[0].id },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating contact:', error);
    await pool.end();
    return NextResponse.json(
      { error: 'Failed to submit contact form', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
