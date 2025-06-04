import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { SharpBanner } from './SharpBanner';

describe('SharpBanner', () => {
  it('renders with default props', () => {
    render(<SharpBanner label="Default Banner" />);
    expect(screen.getByText('Default Banner')).toBeInTheDocument();
  });

  it('renders with a badge if showBadge is true', () => {
    render(<SharpBanner label="Banner with Badge" showBadge color="blue" />);
    expect(screen.getByText('blue')).toBeInTheDocument();
  });

  it('renders a link button if showLinkButton is true', () => {
    render(<SharpBanner label="Banner with Link" showLinkButton color="blue" />);
    expect(screen.getByText('Learn more')).toBeInTheDocument();
  });

  it('renders a close button and hides the banner when clicked', () => {
    render(<SharpBanner label="Closable Banner" showCloseButton />);
    const closeButton = screen.getByRole('button');
    fireEvent.click(closeButton);
    expect(screen.queryByText('Closable Banner')).not.toBeInTheDocument();
  });

  it('applies neutral color to link when variant is fill', () => {
    render(<SharpBanner label="Fill Link Test" variant="fill" color="orange" showLinkButton />);
    const link = screen.getByText('Learn more');
    expect(link).toHaveClass('text-[var(--shadeui-color-gray-600)]'); // or however your LinkButton applies it
  });

  it('applies matching color to link when variant is accent', () => {
    render(<SharpBanner label="Accent Link Test" variant="accent" color="purple" showLinkButton />);
    const link = screen.getByText('Learn more');
    expect(link).toHaveClass('text-[var(--shadeui-color-purple-600)]'); // or equivalent
  });
});
