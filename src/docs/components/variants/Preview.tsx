import React, { Suspense, lazy, useEffect, useState } from 'react';
import Fallback from './Fallback';

interface Props {
  component: string;
  variant: string;
  variantId?: string;
  isDarkTheme?: boolean;
}

export interface VariantProps {
  variantId: string;
}

const Preview = ( props: Props ): JSX.Element => {

  const [renderedComponent, setRenderedComponent] = useState<JSX.Element>(<></>);

  useEffect(() => {
    const variantId = props.variantId as string;
    switch (props.component) {
      case 'breadcrumbs':
        const BreadcrumbVariants = lazy(() => import('./breadcrumbs/BreadcrumbVariants'));
        setRenderedComponent(<BreadcrumbVariants variantId={variantId} />);
        break;

      case 'button':
        const ButtonVariants = lazy(() => import('./buttons/ButtonVariants'));
        setRenderedComponent(<ButtonVariants variantId={variantId} />);
        break;

      case 'checkbox':
        const InputCheckboxVariants = lazy(() => import('./inputCheckbox/inputCheckboxVariants'));
        setRenderedComponent(<InputCheckboxVariants variantId={variantId} />);
        break;

      case 'checkbox-group':
        const InputCheckboxGroupVariants = lazy(() => import('./inputCheckboxGroup/InputCheckboxGroupVariants'));
        setRenderedComponent(<InputCheckboxGroupVariants variantId={variantId} />);
        break;

      case 'form':
        const DefaultForm = lazy(() => import('./forms/DefaultForm'));
        setRenderedComponent(<DefaultForm />);
        break;

      case 'link':
        const LinkVariants = lazy(() => import('./link/LinkVariants'));
        setRenderedComponent(<LinkVariants variantId={variantId} />);
        break;

      case 'primary-navigation':
        const DefaultNavPrimaryLink = lazy(() => import('./navPrimary/DefaultNavPrimaryLink'));
        setRenderedComponent(<DefaultNavPrimaryLink />);
        break;

      case 'radio-group':
        const InputRadioGroupVariants = lazy(() => import('./inputRadioGroup/InputRadioGroupVariants'));
        setRenderedComponent(<InputRadioGroupVariants variantId={variantId} />);
        break;

      case 'secondary-navigation':
        const DefaultNavSecondary = lazy(() => import('./navSecondary/DefaultNavSecondary'));
        setRenderedComponent(<DefaultNavSecondary />);
        break;

      case 'tabs':
        const DefaultTabs = lazy(() => import('./tabs/DefaultTabs'));
        setRenderedComponent(<DefaultTabs />);
        break;

      case 'tag':
        const TagVariants = lazy(() => import('./tag/TagVariants'));
        setRenderedComponent(<TagVariants variantId={variantId} />);
        break;

      case 'tertiary-navigation':
        const DefaultNavTertiary = lazy(() => import('./navTertiary/DefaultNavTertiary'));
        setRenderedComponent(<DefaultNavTertiary />);
        break;

      case 'text-input':
        const InputTextVariants = lazy(() => import('./inputText/InputTextVariants'));
        setRenderedComponent(<InputTextVariants variantId={variantId} />);
        break;

        case 'wizard-navigation':
        const DefaultNavWizard = lazy(() => import('./navWizard/DefaultNavWizard'));
        setRenderedComponent(<DefaultNavWizard />);
        break;

      default:
        setRenderedComponent(<p>Failed to load component!</p>);
    }
  }, [props.variantId, props.component]);

  return (
    <Suspense fallback={<Fallback />}>
      { renderedComponent }
    </Suspense>
  );
}

export default Preview;