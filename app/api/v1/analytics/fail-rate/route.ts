import { NextRequest, NextResponse } from "next/server";
import { getAllFailRates, getWorkflowFailRates, type Period } from "@/lib/analytics/fail-rate";

/**
 * GET /api/v1/analytics/fail-rate
 * Query params:
 *   - repo: owner/repo (optional — if omitted, returns all repos)
 *   - period: 1 | 7 | 30 (default: 30)
 */
export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const repo = searchParams.get("repo");
  const periodParam = searchParams.get("period");

  const period = (
    periodParam && ["1", "7", "30"].includes(periodParam)
      ? parseInt(periodParam)
      : 30
  ) as Period;

  try {
    const data = repo
      ? await getWorkflowFailRates(repo, period)
      : await getAllFailRates(period);

    return NextResponse.json({ period, data });
  } catch (err: unknown) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Query failed" },
      { status: 500 }
    );
  }
}
