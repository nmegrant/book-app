import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
      <div>
        <Link href="/">
          <a>Main Page</a>
        </Link>
        <Link href="/browse">
          <a>Browse</a>
        </Link>
        <Link href="/checkout">
          <a>Checkout</a>
        </Link>
      </div>
      <div>{children}</div>
    </div>
  );
}
