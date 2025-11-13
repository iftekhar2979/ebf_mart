// components/product/ProductCTA.tsx

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, Plus, Minus } from 'lucide-react';

interface ProductCTAProps {
  quantity: number;
  setQuantity: (q: number) => void;
  onAddToCart: () => void;
}

export const ProductCTA: React.FC<ProductCTAProps> = ({
  quantity,
  setQuantity,
  onAddToCart,
}) => {
  return (
    <div className="flex items-center space-x-4 border-t pt-6">
      
      {/* Quantity Control */}
      <div className="flex items-center border border-gray-300 rounded-full h-12">
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-full w-12 rounded-full text-gray-600 hover:bg-gray-100"
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
        >
          <Minus className="h-4 w-4" />
        </Button>
        <span className="px-4 text-lg font-semibold text-gray-800 w-12 text-center">{quantity}</span>
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-full w-12 rounded-full text-pink-600 hover:bg-pink-50"
          onClick={() => setQuantity(quantity + 1)}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      {/* Chat/Message Button */}
      <Button 
        variant="outline" 
        size="icon" 
        className="h-12 w-12 rounded-full text-gray-600 border-gray-300 hover:bg-gray-100 shrink-0"
        aria-label="Chat with Seller"
        onClick={() => console.log('Chat initiated')}
      >
        <MessageSquare className="h-5 w-5" />
      </Button>
      
      {/* Add to Cart Button */}
      <Button 
        className="flex-grow h-12 rounded-full font-bold text-lg" 
        style={{ backgroundColor: '#ff69b4', hover: '#c9488a' }}
        onClick={onAddToCart}
      >
        Add to Cart
      </Button>
    </div>
  );
};