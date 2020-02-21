//export type T = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  GenericScalar: any;
};

export enum AddressCountry {
  At = "AT",
  Be = "BE",
  Bg = "BG",
  Hr = "HR",
  Cy = "CY",
  Cz = "CZ",
  Dk = "DK",
  Ee = "EE",
  Fi = "FI",
  Fr = "FR",
  De = "DE",
  Gr = "GR",
  Hu = "HU",
  Ie = "IE",
  It = "IT",
  Lv = "LV",
  Lt = "LT",
  Lu = "LU",
  Mt = "MT",
  Nl = "NL",
  Pt = "PT",
  Ro = "RO",
  Sk = "SK",
  Si = "SI",
  Es = "ES",
  Se = "SE",
}

export type BookingInput = {
  customerId: Scalars["String"];
  propertyId: Scalars["String"];
  bookingMessage?: Scalars["String"];
};

export type BookingMutation = {
  __typename?: "BookingMutation";
  createBooking?: CreateBooking;
  cancelBooking?: CancelBooking;
};

export type BookingMutationCreateBookingArgs = {
  bookingData: BookingInput;
};

export type BookingMutationCancelBookingArgs = {
  bookingId: Scalars["String"];
  customerId: Scalars["String"];
};

export type BookingType = {
  __typename?: "BookingType";
  id: Scalars["ID"];
  customer?: CustomerType;
  property?: PropertyType;
  message?: Scalars["String"];
};

export type CancelBooking = {
  __typename?: "CancelBooking";
  booking?: BookingType;
};

export type CreateBooking = {
  __typename?: "CreateBooking";
  booking?: BookingType;
};

export type CreateUser = {
  __typename?: "CreateUser";
  user?: CustomerType;
};

export type CustomerBookingType = {
  __typename?: "CustomerBookingType";
  id: Scalars["ID"];
  customer?: CustomerType;
  property?: PropertyType;
  message?: Scalars["String"];
};

export type CustomerInput = {
  username: Scalars["String"];
  email: Scalars["String"];
  password: Scalars["String"];
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  phone: Scalars["String"];
  street: Scalars["String"];
  city: Scalars["String"];
  country: Scalars["String"];
  zipCode: Scalars["String"];
};

export type CustomerMutation = {
  __typename?: "CustomerMutation";
  createUser?: CreateUser;
  tokenAuth?: ObtainJsonWebToken;
  verifyToken?: Verify;
  refreshToken?: Refresh;
};

export type CustomerMutationCreateUserArgs = {
  userData: CustomerInput;
};

export type CustomerMutationTokenAuthArgs = {
  username: Scalars["String"];
  password: Scalars["String"];
};

export type CustomerMutationVerifyTokenArgs = {
  token: Scalars["String"];
};

export type CustomerMutationRefreshTokenArgs = {
  token: Scalars["String"];
};

export type CustomerQuery = {
  __typename?: "CustomerQuery";
  customer?: CustomerType;
  allBookings?: Array<CustomerBookingType>;
  booking?: CustomerBookingType;
};

export type CustomerQueryBookingArgs = {
  bookingId?: Scalars["String"];
};

export type CustomerType = {
  __typename?: "CustomerType";
  id: Scalars["ID"];
  user: UserType;
  phone?: Scalars["String"];
  address?: PropertyAddress;
  bookingSet: Array<CustomerBookingType>;
};

export type Mutation = {
  __typename?: "Mutation";
  customer?: CustomerMutation;
  booking?: BookingMutation;
};

export type ObtainJsonWebToken = {
  __typename?: "ObtainJSONWebToken";
  token?: Scalars["String"];
};

export type PropertyAddress = {
  __typename?: "PropertyAddress";
  id: Scalars["ID"];
  property?: PropertyType;
  customer?: CustomerType;
  street: Scalars["String"];
  city: Scalars["String"];
  country: AddressCountry;
  zipCode: Scalars["String"];
};

export enum PropertyCategory {
  Apartment = "APARTMENT",
  Room = "ROOM",
  Bungalow = "BUNGALOW",
  House = "HOUSE",
}

export type PropertyImage = {
  __typename?: "PropertyImage";
  id: Scalars["ID"];
  property?: PropertyType;
  url: Scalars["String"];
  alt: Scalars["String"];
};

export enum PropertyInterior {
  Unfurnished = "UNFURNISHED",
  SemiFurnished = "SEMI_FURNISHED",
  Furnished = "FURNISHED",
}

export type PropertyPrice = {
  __typename?: "PropertyPrice";
  id: Scalars["ID"];
  property: PropertyType;
  rent: Scalars["Float"];
  deposit: Scalars["Float"];
};

export type PropertyQuery = {
  __typename?: "PropertyQuery";
  allProperties?: Array<PropertyType>;
  property?: PropertyType;
  searchProperties?: Array<PropertyType>;
};

export type PropertyQueryPropertyArgs = {
  propertyId?: Scalars["String"];
};

export type PropertyQuerySearchPropertiesArgs = {
  filterParams?: SearchInput;
  sortParams?: SortByFields;
  order?: SortOrder;
};

export type PropertyType = {
  __typename?: "PropertyType";
  id: Scalars["ID"];
  name: Scalars["String"];
  description: Scalars["String"];
  bedroom: Scalars["Int"];
  bathroom: Scalars["Int"];
  availability: Scalars["Date"];
  category: PropertyCategory;
  interior: PropertyInterior;
  propertyPrice?: PropertyPrice;
  address?: PropertyAddress;
  Image: Array<PropertyImage>;
  booking?: CustomerBookingType;
};

export type Query = {
  __typename?: "Query";
  property?: PropertyQuery;
  customer?: CustomerQuery;
};

export type Refresh = {
  __typename?: "Refresh";
  token?: Scalars["String"];
  payload?: Scalars["GenericScalar"];
};

export type SearchInput = {
  interior?: Scalars["String"];
  bedroom?: Scalars["Int"];
  city?: Scalars["String"];
  country?: Scalars["String"];
  rent?: Scalars["Float"];
  category?: Scalars["String"];
};

export enum SortByFields {
  Price = "price",
  Availability = "availability",
}

export enum SortOrder {
  Asc = "ASC",
  Dsc = "DSC",
}

export type UserType = {
  __typename?: "UserType";
  id: Scalars["ID"];
  password: Scalars["String"];
  lastLogin?: Scalars["DateTime"];
  isSuperuser: Scalars["Boolean"];
  username: Scalars["String"];
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  email: Scalars["String"];
  isStaff: Scalars["Boolean"];
  isActive: Scalars["Boolean"];
  dateJoined: Scalars["DateTime"];
  customer?: CustomerType;
};

export type Verify = {
  __typename?: "Verify";
  payload?: Scalars["GenericScalar"];
};
