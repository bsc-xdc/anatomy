import { ReactElement, useState, useEffect, cloneElement, useId } from 'react';
import HeadingElement from "./Heading";
import Link from './Link';
import { Props as TagProps } from "./Tag";
import { Props as ImageProps } from "./Image";

interface Props {
  tag?: ReactElement< TagProps >,
  texts: {
    title: string;
    description: string;
  }
  linkTo: string;
  headingLevel?: "h2" | "h3" | "h4" | "h5" | "h6";
  variant?: "ghost" | "border-light" | "border-ghost";
  image?: ReactElement< ImageProps >;
  gradientBrand?: boolean;
  dropShadow?: boolean;
}

const ProductCard = (props: Props): JSX.Element => {
  const { tag, texts, headingLevel, linkTo, variant, image, gradientBrand, dropShadow} = props;

  const [clonedImage, setClonedImage] = useState<ReactElement>();
  const [clonedTag, setClonedTag] = useState<ReactElement>();

  const productNameId = useId();

  let cardStyles = {
    classes: "",
    titleLinkClasses: "",
    linkClasses: ""
  }

  const defaultStyle = {
    classes: "bsds-card",
    titleLinkClasses: "bsds-link-subtle",
    linkClasses: ""
  }

  const ghostStyle = {
    classes: "bsds-card-ghost",
    titleLinkClasses: "bsds-link-ghost",
    linkClasses: "bsds-link-ghost"
  }

  const borderLightStyle = {
    classes: "bsds-card-border-light",
    titleLinkClasses: "bsds-link-subtle",
    linkClasses: ""
  }

  const borderGhostStyle = {
    classes: "bsds-card-border-ghost",
    titleLinkClasses: "bsds-link-ghost",
    linkClasses: "bsds-link-ghost"
  }

  switch(variant) {
    case "ghost":
      cardStyles = {...ghostStyle};
      break;
    case "border-light":
      cardStyles = {...borderLightStyle};
      break;
    case "border-ghost":
      cardStyles = {...borderGhostStyle};
      break;

    default:
      cardStyles = {...defaultStyle};
      break;
  }

  let decorativeState = "";
  if (gradientBrand && variant?.includes("ghost")) {
    decorativeState = "bsds-card-gradient";
    cardStyles = {...borderGhostStyle};
  } else if (gradientBrand) {
    decorativeState = "bsds-card-gradient";
    cardStyles = {...borderLightStyle};
  } else if (dropShadow && variant?.includes("ghost")) {
    decorativeState = "bsds-card-shadow";
    cardStyles = {...borderGhostStyle};
  } else if (dropShadow) {
    decorativeState = "bsds-card-shadow";
    cardStyles = {...borderLightStyle};
  }

  useEffect(() => {
    if(tag) {
      setClonedTag(cloneElement(tag as ReactElement, {
        isGhost: (variant === "ghost" || variant === "border-ghost"),
     }));
    }
  },[tag, variant])

  useEffect(() => {
    if(image) {
      setClonedImage(cloneElement(image as ReactElement, {
        ratio: (image.props.ratio ? image.props.ratio : "1:1"),
        isDecorative: false,
        isGhost: (variant === "ghost" || variant === "border-ghost"),
     }));
    }
  },[image, linkTo, variant])

  useEffect(() => {
    //This is to expand the link hitbox for 50% split image
    if(image?.props.ratio === "50:50") {
      const productCardLinks = document.querySelectorAll(".bsds-product-card-with-image");
      Array.prototype.forEach.call(productCardLinks, productCardLink => {
        let keyDown:number, keyUp:number, link = productCardLink.querySelector("a");
        productCardLink.onmousedown = () => keyDown = +new Date();
        productCardLink.onmouseup = () => {
          keyUp = +new Date();
          if((keyUp - keyDown) < 200) {
            link.click();
          }
        }
      });
    }
  }, [image?.props.ratio])

  const defaultProductCard = (
    <div className={decorativeState ? `${"bsds-product-card"} ${cardStyles.classes} ${decorativeState}` : `${"bsds-product-card"} ${cardStyles.classes}`} data-testid="bsdsProductCard">
      { image && clonedImage }
      { tag && clonedTag }
      { headingLevel ? <HeadingElement headingLevel={headingLevel} className="bsds-card-title" id={"productTitle" + productNameId}>
        <Link href={linkTo} className={`${cardStyles.titleLinkClasses}`}>
          { texts.title }
        </Link></HeadingElement> : <Link href={linkTo} className={`${"bsds-product-card-ns-title"} ${cardStyles.titleLinkClasses}`} id={"productTitle" + productNameId}>
          { texts.title }
      </Link> }
      <p className="bsds-card-description">{texts?.description}</p>
    </div>
  )

  if (image?.props.ratio === "50:50") {
    return (
      <div data-testid="bsdsProductCard" className="bsds-even-split-image-product-card">
        { image && clonedImage }
        <div className={decorativeState ? `${"bsds-product-card"} ${cardStyles.classes} ${decorativeState}` : `${"bsds-product-card"} ${cardStyles.classes}`}>
          { tag && clonedTag }
          { headingLevel ? <HeadingElement headingLevel={headingLevel} className="bsds-card-title" id={"productTitle" + productNameId}>
            <Link href={linkTo} className={`${cardStyles.titleLinkClasses}`}>
              { texts.title }
            </Link></HeadingElement> : <Link href={linkTo} className={`${"bsds-product-card-ns-title"} ${cardStyles.titleLinkClasses}`} id={"productTitle" + productNameId}>
              { texts.title }
          </Link> }
          <p className="bsds-card-description">{texts?.description}</p>
        </div>
      </div>
    )
  }

  return (
    defaultProductCard
  );
}

export default ProductCard;

