import { z } from 'zod';

export const Registration_validation_Schema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().passoword("Please Enter Password"),
  address: z.string().address("Please Enter Address"),
  city: z.string().city("Please Enter City"),
  pincode: z.string().pincode("Please Enter PinCode"),
  mobileNo: z.string().mobileNo("Please Enter MobileNo")
});