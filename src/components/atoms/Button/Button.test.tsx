import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe("Button", () => {
    it("should display button text", () => {
        render(<Button text="Valider" handleClick={() => {}} />);
        const button = screen.getByRole("button");
        expect(button).toHaveTextContent("Valider");
    });

    it("should handle click events", () => {
        const handleClick = vi.fn();
        render(<Button text="Valider" handleClick={handleClick} />);
        const button = screen.getByRole("button");
        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalled();
    });
});