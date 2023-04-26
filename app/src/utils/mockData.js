/**
 * data used to test the component DataTable
 */
const mockData = [
  {
    firstName: "Alphonse",
    lastName: "Haye",
    startDate: "01/02/2000",
    department: "Sales",
    dateOfBirth: "06/21/1968",
    street: "64 avenue Fernand Herbaut",
    city: "Aulnay",
    state: "SSD",
    zipCode: "93600",
  },
  {
    firstName: "louis",
    lastName: "Delaporte",
    startDate: "07/06/2004",
    department: "Human Resources",
    dateOfBirth: "10/07/1970",
    street: "2 rue Victor Hugo",
    city: "Bondy",
    state: "SSD",
    zipCode: "93200",
  },
  {
    firstName: "Stéphanie",
    lastName: "lecourbe",
    startDate: "09/12/2014",
    department: "Marketing",
    dateOfBirth: "05/23/1990",
    street: "rue de la gare",
    city: "Saint Denis",
    state: "SSD",
    zipCode: "93800",
  },
  {
    firstName: "Roger",
    lastName: "Rabbit",
    startDate: "03/16/1999",
    department: "Engineering",
    dateOfBirth: "08/14/1980",
    street: "3 chemin du terrier",
    city: "Paris",
    state: "PA",
    zipCode: "75000",
  },
  {
    firstName: "Christine",
    lastName: "toutin",
    startDate: "11/18/2020",
    department: "Legal",
    dateOfBirth: "02/23/1984",
    street: "28 rue de la cour",
    city: "Paris",
    state: "PA",
    zipCode: "75000",
  },
  {
    firstName: "Wanda",
    lastName: "Naumet",
    startDate: "08/03/2001",
    department: "Human Resources",
    dateOfBirth: "04/14/1980",
    street: "rue poissonnière",
    city: "Caen",
    state: "CA",
    zipCode: "14000",
  },
  {
    firstName: "Jessica",
    lastName: "Cado",
    startDate: "05/09/2002",
    department: "Sales",
    dateOfBirth: "02/15/1966",
    street: "5 rue froide",
    city: "Rennes",
    state: "IEV",
    zipCode: "35000",
  },
  {
    firstName: "Frédéric",
    lastName: "LAUSIN",
    startDate: "02/13/2018",
    department: "Engineering",
    dateOfBirth: "12/11/1991",
    street: "impasse basse",
    city: "Rouen",
    state: "SM",
    zipCode: "76000",
  },
  {
    firstName: "Laurence",
    lastName: "Portal",
    startDate: "09/29/2003",
    department: "Engineering",
    dateOfBirth: "08/27/1994",
    street: "15 allée du point du jour",
    city: "Nantes",
    state: "LA",
    zipCode: "44000",
  },
  {
    firstName: "Thierry",
    lastName: "Lafronde",
    startDate: "05/24/1996",
    department: "Sales",
    dateOfBirth: "04/01/1969",
    street: "18 rue haute",
    city: "Montreuil",
    state: "SSD",
    zipCode: "93000",
  },
  {
    firstName: "Victoria",
    lastName: "Victor",
    startDate: "11/07/2000",
    department: "Sales",
    dateOfBirth: "10/27/1976",
    street: "63 avenue de la victoire",
    city: "Rouen",
    state: "SM",
    zipCode: "76000",
  },
  {
    firstName: "Estelle",
    lastName: "Rebelle",
    startDate: "02/24/1999",
    department: "Legal",
    dateOfBirth: "01/30/1967",
    street: "allée transversale",
    city: "Clermont-Ferrand",
    state: "PDD",
    zipCode: "63000",
  },
  {
    firstName: "Emile",
    lastName: "Lauza",
    startDate: "12/01/2004",
    department: "Engineering",
    dateOfBirth: "06/15/1969",
    street: "4 rue de l'assomoir",
    city: "Lilles",
    state: "ND",
    zipCode: "59000",
  },
  {
    firstName: "Guy",
    lastName: "Sampamo",
    startDate: "10/15/2010",
    department: "Human Resources",
    dateOfBirth: "04/12/1977",
    street: "2 rue Bonnes Nouvelles",
    city: "Rouen",
    state: "SM",
    zipCode: "76000",
  },
  {
    firstName: "Agathe",
    lastName: "Christine",
    startDate: "02/12/2013",
    department: "Marketing",
    dateOfBirth: "06/28/1988",
    street: "1 impasse souricière",
    city: "Renne",
    state: "IEV",
    zipCode: "35000",
  },
  {
    firstName: "Charles",
    lastName: "Blairdelaud",
    startDate: "03/12/2001",
    department: "Engineering",
    dateOfBirth: "05/19/1976",
    street: "55 rue des lettres",
    city: "Paris",
    state: "PA",
    zipCode: "75000",
  },
  {
    firstName: "Michelle",
    lastName: "Louise",
    startDate: "12/08/2015",
    department: "Legal",
    dateOfBirth: "09/22/1983",
    street: "2 avenue de la commune",
    city: "Marseille",
    state: "BDR",
    zipCode: "13000",
  },
  {
    firstName: "Simone",
    lastName: "Bodevoir",
    startDate: "04/11/2021",
    department: "Human Resources",
    dateOfBirth: "06/13/1979",
    street: "23 avenue des Mandarins",
    city: "Paris",
    state: "PA",
    zipCode: "75000",
  },
  {
    firstName: "Marie",
    lastName: "Pervenche",
    startDate: "07/11/2007",
    department: "Sales",
    dateOfBirth: "02/02/1965",
    street: "13 chemin de l'effroi",
    city: "Clermont-Ferrand",
    state: "PDD",
    zipCode: "63000",
  },
  {
    firstName: "Pierre",
    lastName: "Affeu",
    startDate: "09/15/2013",
    department: "Engineering",
    dateOfBirth: "12/19/1996",
    street: "83 rue de l'homme",
    city: "Nantes",
    state: "LA",
    zipCode: "44000",
  },
  {
    firstName: "Agathe",
    lastName: "Deblouse",
    startDate: "08/12/2007",
    department: "Engineering",
    dateOfBirth: "11/26/1990",
    street: "33 rue du roc",
    city: "Marseille",
    state: "BDR",
    zipCode: "13000",
  },
  {
    firstName: "Edmonde",
    lastName: "Rosetand",
    startDate: "06/20/2003",
    department: "Sales",
    dateOfBirth: "08/11/1966",
    street: "51 rue Chantecler",
    city: "Marseille",
    state: "BDR",
    zipCode: "13000",
  },
  {
    firstName: "Denis",
    lastName: "Ridedo",
    startDate: "11/11/2007",
    department: "Sales",
    dateOfBirth: "04/27/1973",
    street: "63 rue fatale",
    city: "Paris",
    state: "PA",
    zipCode: "75000",
  },
  {
    firstName: "Renée",
    lastName: "Cédarte",
    startDate: "02/24/1999",
    department: "Legal",
    dateOfBirth: "12/23/1965",
    street: "4 rue de la méthode",
    city: "Rennes",
    state: "IEV",
    zipCode: "35000",
  },
  {
    firstName: "François",
    lastName: "Marouetia",
    startDate: "04/11/2010",
    department: "Engineering",
    dateOfBirth: "06/13/1989",
    street: "11 rue candide",
    city: "Caen",
    state: "CA",
    zipCode: "14000",
  },
  {
    firstName: "Lisa",
    lastName: "Mona",
    startDate: "07/11/2009",
    department: "Engineering",
    dateOfBirth: "04/19/1988",
    street: "14 rue De Vinci",
    city: "Lille",
    state: "ND",
    zipCode: "59000",
  },
  {
    firstName: "Michel",
    lastName: "Louis",
    startDate: "09/15/2010",
    department: "Engineering",
    dateOfBirth: "10/03/1970",
    street: "impasse des insurgés",
    city: "Lille",
    state: "ND",
    zipCode: "59000",
  },
  {
    firstName: "Florence",
    lastName: "Aujour",
    startDate: "08/12/2009",
    department: "Engineering",
    dateOfBirth: "09/24/1974",
    street: "8 rue du bac",
    city: "Caen",
    state: "CA",
    zipCode: "14000",
  },
  {
    firstName: "Louis",
    lastName: "Gorana",
    startDate: "06/20/2011",
    department: "Human Resources",
    dateOfBirth: "03/27/1972",
    street: "rue des beaux quartiers",
    city: "Nantes",
    state: "LA",
    zipCode: "44000",
  },
  {
    firstName: "Françoise",
    lastName: "Aurel",
    startDate: "11/07/2010",
    department: "Engineering",
    dateOfBirth: "12/02/1991",
    street: "44 chemin vert",
    city: "Marseille",
    state: "BDR",
    zipCode: "13000",
  },
  {
    firstName: "Maxime",
    lastName: "Forest",
    startDate: "12/15/2000",
    department: "Legal",
    dateOfBirth: "01/17/1988",
    street: "35 rue des volcans",
    city: "Clermont-Ferrand",
    state: "PDD",
    zipCode: "63000",
  },
];

export default mockData;
