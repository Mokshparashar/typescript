type candidateName = {
  firstName: string;
  secondName: string;
};

type candidateAddress = {
  country: string;
  city: string;
  ZipCode: number;
};

type candidate = candidateName &
  candidateAddress & {
    Email: string;
    phoneNumber: number;
  };

const candidateDetails: candidate = {
  firstName: "Moksh",
  secondName: "Parashar",
  country: "India",
  city: "Bangalore",
  ZipCode: 560001,
  Email: "parasharm239@gmail.com",
  phoneNumber: 7693076835,
};
