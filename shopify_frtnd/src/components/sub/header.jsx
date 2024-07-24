/**
 * Header component which uses to get he header tag
 * Owner: Demesh Fernando
 * Last Updated Date: 22 July 2024
 * @component
 * @param {string} props
 * @returns Provided header with <h1></h1> tags.
 * @example
 * <Header header="header here" />
 */
export default function Header(props) {
  return <h1>{props.header}</h1>;
}
