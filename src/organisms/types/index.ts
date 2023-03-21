export interface IconProps {
  color?: string;
}

interface BaseButtonProps {
  text: string;
  icon?: React.ReactNode;
  title?: string;
  variant?: 'default' | 'primary';
}

export interface SearchPlansFormProps {
  button: BaseButtonProps;
  fields?: {
    variant?: 'secondary' | 'none';
    errorVariant?: 'error' | 'warning';
  };
}

export interface SearchPlansFormData {
  zipCode: string;
  addressNumber: string;
}

export interface LeadFormData {
  fullName: string;
  companyName: string;
  email: string;
  message: string;
}

export interface ConfirmFullAddressFormData extends SearchPlansFormData {
  streetName: string;
  neighborhood: string;
}

export interface DefaultBasePlanCardProps {
  // TODO
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sx: any;
}
