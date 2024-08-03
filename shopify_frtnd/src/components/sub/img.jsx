/**
 * Img component which uses to get image tag
 * Owner: Demesh Fernando
 * Created Date: 22 July 2024
 * Last Updated Date: 22 July 2024
 * @component
 * @param {string} props
 * @returns Provided image with <img /> tags.
 * @example
 * <Img src="url of the image" alt="text if the image is not visible" />
 */
export default function Img(props) {
  return <img src={props.src} alt={props.alt} />;
}
