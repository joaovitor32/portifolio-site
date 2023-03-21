/* eslint-disable no-restricted-syntax */
interface InputProps {
  error?: boolean;
}

const styles = {
  input: ({ error = false }: InputProps) => ({
    color: 'grey.300',
    backgroundColor: 'grey.100',
    height: 'auto',
    minHeight: '40px',
    borderRadius: '36px',
    border: '2px solid',
    borderColor: `${error ? 'warning.main' : 'primary.light'}`,
    padding: '6px 24px',
  }),
};

export default styles;
