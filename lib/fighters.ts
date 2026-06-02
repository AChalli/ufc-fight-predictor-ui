export interface Fighter {
  id: string
  name: string
  record: string
  weightClass: string
  country: string
}

export async function getFighters(): Promise<Fighter[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/fighters`)
  return res.json()
}