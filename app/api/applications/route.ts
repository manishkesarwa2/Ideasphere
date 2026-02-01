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
    const { name, email, phone, position, resume, message } = body;

    // Validate required fields
    if (!name || !email || !position || !resume || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Insert application into database using raw SQL
    const result = await pool.query(
      `INSERT INTO applications (id, name, email, phone, position, resume, message, "createdAt")
       VALUES (gen_random_uuid()::text, $1, $2, $3, $4, $5, $6, NOW())
       RETURNING id`,
      [name, email, phone || null, position, resume, message]
    );

    await pool.end();

    return NextResponse.json(
      { success: true, id: result.rows[0].id },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating application:', error);
    await pool.end();
    return NextResponse.json(
      { error: 'Failed to submit application', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
