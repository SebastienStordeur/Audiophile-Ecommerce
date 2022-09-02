import React from "react";
import Input from "../UI/Input";
import useInput from "../../hook/useInput";
import InputValidator from "./InputValidator";

const letterRegex = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
const isNotEmpty: any = (value: string) => value.trim() !== "";
const isValidName: (value: string) => boolean = (value: string) =>
  letterRegex.test(value) && isNotEmpty && value.length >= 3;

const CheckoutForm: React.FC = () => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput(isValidName);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(isValidName);
  const {
    value: enteredPhone,
    isValid: enteredPhoneIsValid,
    hasError: phoneInputHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: resetPhoneInput,
  } = useInput(isValidName);
  const {
    value: enteredAddress,
    isValid: enteredAddressIsValid,
    hasError: addressInputHasError,
    valueChangeHandler: addressChangeHandler,
    inputBlurHandler: addressBlurHandler,
    reset: resetAddressInput,
  } = useInput(isValidName);
  const {
    value: enteredZip,
    isValid: enteredZipIsValid,
    hasError: zipInputHasError,
    valueChangeHandler: zipChangeHandler,
    inputBlurHandler: zipBlurHandler,
    reset: resetZipInput,
  } = useInput(isValidName);
  const {
    value: enteredCity,
    isValid: enteredCityIsValid,
    hasError: cityInputHasError,
    valueChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
    reset: resetCityInput,
  } = useInput(isValidName);
  const {
    value: enteredCountry,
    isValid: enteredCountryIsValid,
    hasError: countryInputHasError,
    valueChangeHandler: countryChangeHandler,
    inputBlurHandler: countryBlurHandler,
    reset: resetCountryInput,
  } = useInput(isValidName);
  const {
    value: enteredEmoneynumber,
    isValid: enteredEmoneynumberIsValid,
    hasError: emoneynumberInputHasError,
    valueChangeHandler: emoneynumberChangeHandler,
    inputBlurHandler: emoneynumberBlurHandler,
    reset: resetEmoneynumberInput,
  } = useInput(isValidName);
  const {
    value: enteredEmoneypinnumber,
    isValid: enteredEmoneynumberpinIsValid,
    hasError: emoneynumberpinInputHasError,
    valueChangeHandler: emoneynumberpinChangeHandler,
    inputBlurHandler: emoneynumberpinBlurHandler,
    reset: resetEmoneynumberpinInput,
  } = useInput(isValidName);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {};

  return (
    <form className="bg-white mt-14 rounded-lg p-6" onSubmit={handleSubmit}>
      <h1 className="uppercase font-bold text-3xl mb-8">Checkout</h1>

      <h3 className="uppercase text-brown font-bold text-[13px] mb-4">
        Billing details
      </h3>
      <div className="grid gap-6 md:grid-cols-2">
        <InputValidator>
          <label htmlFor="name" className="font-bold text-xs mb-2.5">
            Name
          </label>
          <Input
            id="name"
            className="border-grey border-2 h-14 px-6 rounded-lg"
            value={enteredName}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            placeholder="Alexei Ward"
          />
        </InputValidator>
        <InputValidator>
          <label htmlFor="email" className="font-bold text-xs mb-2.5">
            Email address
          </label>
          <Input
            className="border-grey border-2 h-14 px-6 rounded-lg"
            id="email"
            type="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            placeholder="alexei@mail.com"
          />
        </InputValidator>
        <InputValidator>
          <label htmlFor="phone" className="font-bold text-xs mb-2.5">
            Phone Number
          </label>
          <Input
            className="border-grey border-2 h-14 px-6 rounded-lg"
            id="phone"
            type="tel"
            value={enteredPhone}
            onChange={phoneChangeHandler}
            onBlur={phoneBlurHandler}
            placeholder="+1 202-555-0136"
          />
        </InputValidator>
      </div>

      <h3 className="uppercase text-brown font-bold text-[13px] mt-8 mb-4">
        Shipping Info
      </h3>
      <div className="grid gap-6 md:grid-cols-2">
        <InputValidator className="md:col-start-1 md:col-end-3">
          <label htmlFor="address" className="font-bold text-xs mb-2.5">
            Your Address
          </label>
          <Input
            id="address"
            className="border-grey border-2 h-14 px-6 rounded-lg"
            type="text"
            value={enteredAddress}
            onChange={addressChangeHandler}
            onBlur={addressBlurHandler}
            placeholder="1137 Williams Avenue"
          />
        </InputValidator>

        <InputValidator>
          <label htmlFor="zip" className="font-bold text-xs mb-2.5">
            ZIP Code
          </label>
          <Input
            id="zip"
            className="border-grey border-2 h-14 px-6 rounded-lg"
            type="number"
            value={enteredZip}
            onChange={zipChangeHandler}
            onBlur={zipBlurHandler}
            placeholder="10001"
          />
        </InputValidator>

        <InputValidator>
          <label htmlFor="city" className="font-bold text-xs mb-2.5">
            City
          </label>
          <Input
            id="city"
            className="border-grey border-2 h-14 px-6 rounded-lg"
            type="text"
            value={enteredCity}
            onChange={cityChangeHandler}
            onBlur={cityBlurHandler}
            placeholder="New York"
          />
        </InputValidator>

        <InputValidator>
          <label htmlFor="country" className="font-bold text-xs mb-2.5">
            Country
          </label>
          <Input
            id="country"
            className="border-grey border-2 h-14 px-6 rounded-lg"
            type="text"
            value={enteredCountry}
            onChange={countryChangeHandler}
            onBlur={countryBlurHandler}
            placeholder="United States"
          />
        </InputValidator>
      </div>

      <h3 className="uppercase text-brown font-bold text-[13px] mt-8 mb-4">
        Payment details
      </h3>
      <div className="grid gap-6">
        <InputValidator>
          <label htmlFor="paiement" className="font-bold text-xs mb-2.5">
            Payment Method
          </label>
          <Input
            id="paiement1"
            className="border-grey border-2 h-14 px-6 rounded-lg"
            type="radio"
            /*             value={enteredCountry}
            onChange={countryChangeHandler}
            onBlur={countryBlurHandler}
            placeholder="United States" */
          />
          <label htmlFor="paiement1">e-Money</label>
          <Input
            id="paiement2"
            className="border-grey border-2 h-14 px-6 rounded-lg mt-4"
            type="radio"
            /*             value={enteredCountry}
            onChange={countryChangeHandler}
            onBlur={countryBlurHandler}
            placeholder="United States" */
          />
          <label htmlFor="paiement2">Cash on Delivery</label>
        </InputValidator>

        <InputValidator>
          <label htmlFor="emoneynumber" className="font-bold text-xs mb-2.5">
            e-Money Number
          </label>
          <Input
            id="emoneynumber"
            className="border-grey border-2 h-14 px-6 rounded-lg"
            type="text"
            value={enteredCountry}
            onChange={countryChangeHandler}
            onBlur={countryBlurHandler}
            placeholder="238521993"
          />
        </InputValidator>

        <InputValidator>
          <label htmlFor="e-pin" className="font-bold text-xs mb-2.5">
            e-Money PIN
          </label>
          <Input
            id="e-pin"
            className="border-grey border-2 h-14 px-6 rounded-lg"
            type="text"
            value={enteredCountry}
            onChange={countryChangeHandler}
            onBlur={countryBlurHandler}
            placeholder="6891"
          />
        </InputValidator>
      </div>
    </form>
  );
};

export default CheckoutForm;
