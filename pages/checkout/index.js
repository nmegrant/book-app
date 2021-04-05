import React, { useContext, useState } from "react";
import { CheckOutContext } from "../../state/CheckOutContext";
import CheckoutItem from "../../components/CheckoutItem";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/home.module.css";

const Purchase = () => {
  const { state, dispatch } = useContext(CheckOutContext);
  const router = useRouter();
  const handleOnClick = (event) => {
    event.preventDefault();
    router.push("/purchase-complete");
  };
  const total = state.books.reduce(
    (total, currentValue) => (total += currentValue.price),
    0
  );
  return (
    <div className={styles.smcontainer}>
      <h3>Complete Your Purchase</h3>
      <h5>
        Review our purchase and shipping information, then complete the purchase
      </h5>
      <h5>Purchase:</h5>
      {state.books.map((book, index) => (
        <div key={index}>
          <span>
            {book.title}{" "}
            {new Intl.NumberFormat("nl-NL", {
              style: "currency",
              currency: "EUR",
            }).format(book.price)}
          </span>
        </div>
      ))}
      <span>
        Total:{" "}
        {new Intl.NumberFormat("nl-NL", {
          style: "currency",
          currency: "EUR",
        }).format(total)}
      </span>
      <h5>Mail to:</h5>
      <p>{state.userInfo.name}</p>
      <p>{state.userInfo.email}</p>
      <span>
        {state.userInfo.street} {state.userInfo.postalcode}{" "}
        {state.userInfo.country}{" "}
      </span>
      <button onClick={handleOnClick} className={styles.purchaseButton}>
        Complete My Purchase
      </button>
    </div>
  );
};

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
      <form
        onSubmit={(event) => onHandleSubmit(event)}
        className={styles.formStyle}
      >
        <div className={styles.fieldContainer}>
          <div className={styles.field}>
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={userInfo.name}
              onChange={handleChange}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={userInfo.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styles.fieldContainer}>
          <div className={styles.field}>
            <label htmlFor="street" className={styles.label}>
              Street
            </label>
            <input
              type="text"
              id="street"
              name="street"
              value={userInfo.street}
              onChange={handleChange}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="postalcode" className={styles.label}>
              Postal Code
            </label>
            <input
              type="text"
              id="postalcode"
              name="postalcode"
              value={userInfo.postalcode}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styles.fieldContainer}>
          <div className={styles.field}>
            <label htmlFor="country" className={styles.label}>
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={userInfo.country}
              onChange={handleChange}
            />
          </div>
          <div className={styles.field}>
            <input className={styles.submitButton} type="submit" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default function Checkout() {
  const { state, dispatch } = useContext(CheckOutContext);
  const [basket, setBasket] = useState(true);
  const [address, setAddress] = useState(false);
  const [purchase, setPurchase] = useState(false);

  const handleLeftClick = () => {
    if (address) {
      setAddress(false);
      setBasket(true);
    } else if (purchase) {
      setAddress(true);
      setPurchase(false);
    }
  };

  const handleRightClick = () => {
    if (basket) {
      setBasket(false);
      setAddress(true);
    } else if (address) {
      setAddress(false);
      setPurchase(true);
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
          {state.books.length > 0 && (address || purchase) && (
            <button className={styles.chevron} onClick={handleLeftClick}>
              {"\u2039"}
            </button>
          )}
          {state.books.length > 0 && basket && <Basket books={state.books} />}
          {state.books.length > 0 && address && <Address />}
          {state.books.length > 0 && purchase && <Purchase />}
          {state.books.length > 0 && (basket || address) && (
            <button className={styles.chevron} onClick={handleRightClick}>
              {"\u203A"}
            </button>
          )}
        </div>
      </main>
    </div>
  );
}
