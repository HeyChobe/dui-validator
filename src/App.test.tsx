import { render } from '@testing-library/react';
import { describe, expect, vi } from 'vitest'
import App from './App'

describe('App', () => { 
  it('should render', ()=>{
    const spy = vi.spyOn(globalThis.console, 'error');
    render(<App/>);
    expect(spy).not.toHaveBeenCalled();
  });

  it('should have title "Mi DUI es valido?"',()=>{
    const { getByText } = render(<App/>);
    expect(getByText('Mi DUI es valido?')).toHaveTextContent('Mi DUI es valido?');
  });
  
  it('should have an input text', ()=>{
    const { getByTestId } = render(<App/>);
    expect(getByTestId('input-dui')).toBeInTheDocument();
  });

  it('should have a button with text "Validar"',()=>{
    const {getByTestId, getByText} = render(<App/>);

  }); 
})
