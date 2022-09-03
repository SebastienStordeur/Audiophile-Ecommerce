import React, { useState } from "react";
import Input from "../UI/Input";
import useInput from "../../hook/useInput";
import InputValidator from "./InputValidator";
import CheckoutCart from "../Cart/CheckoutCart";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart/cart";
import { RootState } from "../../store/store";

const letterRegex = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
const emailRegex =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
const phoneRegex =
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

const isNotEmpty: any = (value: string) => value.trim() !== "";
const isValidName: any = (value: string) =>
  letterRegex.test(value) && isNotEmpty && value.length >= 3;
const isValidEmail: any = (value: string) =>
  emailRegex.test(value) && isNotEmpty;

const isValidPhone: any = (value: string) =>
  phoneRegex.test(value) && isNotEmpty;

const CheckoutForm: React.FC = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);
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
  } = useInput(isValidEmail);
  const {
    value: enteredPhone,
    isValid: enteredPhoneIsValid,
    hasError: phoneInputHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: resetPhoneInput,
  } = useInput(isValidPhone);
  const {
    value: enteredAddress,
    isValid: enteredAddressIsValid,
    hasError: addressInputHasError,
    valueChangeHandler: addressChangeHandler,
    inputBlurHandler: addressBlurHandler,
    reset: resetAddressInput,
  } = useInput(isNotEmpty);
  const {
    value: enteredZip,
    isValid: enteredZipIsValid,
    hasError: zipInputHasError,
    valueChangeHandler: zipChangeHandler,
    inputBlurHandler: zipBlurHandler,
    reset: resetZipInput,
  } = useInput(isNotEmpty);
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

  const [isCheckoutDone, setIsCheckoutDone] = useState<boolean>(false);

  let formIsValid: boolean = false;

  if (
    enteredNameIsValid &&
    enteredEmailIsValid &&
    enteredPhoneIsValid &&
    enteredAddressIsValid &&
    enteredZipIsValid &&
    enteredCityIsValid &&
    enteredCountryIsValid &&
    items.length > 0
  ) {
    formIsValid = true;
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formIsValid) return;

    const formValues = {
      name: enteredName,
      email: enteredEmail,
      phone: enteredPhone,
      address: enteredAddress,
      zip: enteredZip,
      city: enteredCity,
      country: enteredCountry,
    };

    console.log(formValues);
    resetNameInput();
    resetEmailInput();
    resetPhoneInput();
    resetAddressInput();
    resetZipInput();
    resetCityInput();
    resetCountryInput();

    setIsCheckoutDone(true);
    dispatch(cartActions.resetCart());
  };

  return (
    <section className="lg:flex mb-8">
      <form
        className="bg-white w-full mt-14 rounded-lg p-6"
        onSubmit={handleSubmit}
      >
        <div className="lg:flex">
          <div className="lg:w-11/12">
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
                {nameInputHasError && <p>Error</p>}
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
                {emailInputHasError && <p>Error</p>}
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
                {phoneInputHasError && <p>Error</p>}
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
                {addressInputHasError && <p>Error</p>}
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
                {zipInputHasError && <p>Error</p>}
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
                {cityInputHasError && <p>Error</p>}
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
                {countryInputHasError && <p>Error</p>}
              </InputValidator>
            </div>
          </div>
          <CheckoutCart done={isCheckoutDone} />
        </div>
      </form>
    </section>
  );
};

export default CheckoutForm;
