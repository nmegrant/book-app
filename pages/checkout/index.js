import React, { useContext, useState } from "react";
import { CheckOutContext } from "../../state/CheckOutContext";
import CheckoutItem from "../../components/CheckoutItem";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/home.module.css";

const Basket = ({ books }) => (
  <div className={styles.smcontainer}>
    <h3>Your basket</h3>
    {books.map((book) => (
      <CheckoutItem key={book.id} book={book} />
    ))}
  </div>
);

const Address = () => {
  const { state, dispatch } = useContext(CheckOutContext);
  const [userInfo, setUserInfo] = useState({
    ...state.userInfo,
  });

  const handleChange = (event) => {
    event.preventDefault();
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: "ADD_USERINFO", payload: userInfo });
    console.log(userInfo);
  };

  return (
    <div className={styles.smcontainer}>
      <h4>Enter your info and shipping address</h4>
      <form onSubmit={(event) => onHandleSubmit(event)}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={userInfo.name}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={userInfo.email}
          onChange={handleChange}
        />
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          name="street"
          value={userInfo.street}
          onChange={handleChange}
        />
        <label htmlFor="postalcode">Postal Code</label>
        <input
          type="text"
          id="postalcode"
          name="postalcode"
          value={userInfo.postalcode}
          onChange={handleChange}
        />
        <label htmlFor="country">Country</label>
        <input
          type="text"
          id="country"
          name="country"
          value={userInfo.country}
          onChange={handleChange}
        />
        <input className={styles.submitButton} type="submit" />
      </form>
    </div>
  );
};

export default function Checkout() {
  const { state, dispatch } = useContext(CheckOutContext);
  const [basket, setBasket] = useState(true);
  const [address, setAddress] = useState(false);

  const handleLeftClick = () => {
    if (address) {
      setAddress(false);
      setBasket(true);
    }
  };

  const handleRightClick = () => {
    if (basket) {
      setBasket(false);
      setAddress(true);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Nile - Checkout</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Checkout</h1>

        <div className={styles.checkoutgrid}>
          {state.books.length === 0 && (
            <>
              <h3>You have no books in your basket.</h3>
              <p>
                <Link href={`/browse/`}>
                  <span className={styles.link}>Browse our selection</span>
                </Link>{" "}
                and add books to your basket, then come back here to complete
                the purchase.
              </p>
            </>
          )}
          {state.books.length > 0 && address && (
            <button className={styles.chevron} onClick={handleLeftClick}>
              {"\u2039"}
            </button>
          )}
          {state.books.length > 0 && basket && <Basket books={state.books} />}
          {state.books.length > 0 && address && <Address />}
          {state.books.length > 0 && basket && (
            <button className={styles.chevron} onClick={handleRightClick}>
              {"\u203A"}
            </button>
          )}
        </div>
      </main>
    </div>
  );
}
