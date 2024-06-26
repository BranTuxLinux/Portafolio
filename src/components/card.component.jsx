import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import PropTypes from "prop-types";

export const CardComponent = ({
  head,
  children,
  footer,
  imageUrl,
  buttonLabel,
  buttonOnClick,
  classN,
}) => {
  return (
    <Card className={`col-span-12 sm:col-span-4 h-[300px] ${classN} `}>
      {head && <CardHeader>{head}</CardHeader>}
      {imageUrl && (
        <Image src={imageUrl} alt="Card image" className="card-image" />
      )}
      <CardBody>
        <p>{children}</p>
      </CardBody>
      {footer && <CardFooter>{footer}</CardFooter>}
      {buttonLabel && buttonOnClick && (
        <Button onClick={buttonOnClick} className="card-button">
          {buttonLabel}
        </Button>
      )}
    </Card>
  );
};
CardComponent.propTypes = {
  head: PropTypes.node,
  children: PropTypes.node.isRequired,
  footer: PropTypes.node,
  imageUrl: PropTypes.string,
  buttonLabel: PropTypes.string,
  buttonOnClick: PropTypes.func,
  classN: PropTypes.string,
};