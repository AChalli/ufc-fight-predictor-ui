export interface Fighter {
  id: string
  name: string
  nickname?: string
  record: string
  weightClass: string
  country: string
}

export const fighters: Fighter[] = [
  { id: "1", name: "Jon Jones", nickname: "Bones", record: "27-1-0", weightClass: "Heavyweight", country: "USA" },
  { id: "2", name: "Islam Makhachev", nickname: "The Eagle's Disciple", record: "26-1-0", weightClass: "Lightweight", country: "Russia" },
  { id: "3", name: "Alex Pereira", nickname: "Poatan", record: "11-2-0", weightClass: "Light Heavyweight", country: "Brazil" },
  { id: "4", name: "Leon Edwards", nickname: "Rocky", record: "22-3-0", weightClass: "Welterweight", country: "UK" },
  { id: "5", name: "Ilia Topuria", nickname: "El Matador", record: "16-0-0", weightClass: "Featherweight", country: "Spain" },
  { id: "6", name: "Sean O'Malley", nickname: "Sugar", record: "18-1-0", weightClass: "Bantamweight", country: "USA" },
  { id: "7", name: "Dricus Du Plessis", nickname: "Stillknocks", record: "22-2-0", weightClass: "Middleweight", country: "South Africa" },
  { id: "8", name: "Alexandre Pantoja", nickname: "The Cannibal", record: "28-5-0", weightClass: "Flyweight", country: "Brazil" },
  { id: "9", name: "Conor McGregor", nickname: "Notorious", record: "22-6-0", weightClass: "Lightweight", country: "Ireland" },
  { id: "10", name: "Khabib Nurmagomedov", nickname: "The Eagle", record: "29-0-0", weightClass: "Lightweight", country: "Russia" },
  { id: "11", name: "Charles Oliveira", nickname: "Do Bronx", record: "34-10-0", weightClass: "Lightweight", country: "Brazil" },
  { id: "12", name: "Dustin Poirier", nickname: "The Diamond", record: "30-8-0", weightClass: "Lightweight", country: "USA" },
  { id: "13", name: "Max Holloway", nickname: "Blessed", record: "26-7-0", weightClass: "Featherweight", country: "USA" },
  { id: "14", name: "Kamaru Usman", nickname: "Nigerian Nightmare", record: "20-4-0", weightClass: "Welterweight", country: "Nigeria" },
  { id: "15", name: "Israel Adesanya", nickname: "The Last Stylebender", record: "24-3-0", weightClass: "Middleweight", country: "New Zealand" },
  { id: "16", name: "Sean Strickland", nickname: "", record: "29-6-0", weightClass: "Middleweight", country: "USA" },
  { id: "17", name: "Tom Aspinall", nickname: "", record: "15-3-0", weightClass: "Heavyweight", country: "UK" },
  { id: "18", name: "Ciryl Gane", nickname: "Bon Gamin", record: "12-2-0", weightClass: "Heavyweight", country: "France" },
  { id: "19", name: "Merab Dvalishvili", nickname: "The Machine", record: "18-4-0", weightClass: "Bantamweight", country: "Georgia" },
  { id: "20", name: "Valentina Shevchenko", nickname: "Bullet", record: "23-4-0", weightClass: "Flyweight (W)", country: "Kyrgyzstan" },
]
