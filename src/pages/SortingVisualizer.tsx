import React, { useState, useEffect, useRef } from 'react';

interface BarProps {
  height: number;
  width: number;
  bgColor: string;
}

const Bar: React.FC<BarProps> = ({ height, width, bgColor }) => {
  return (
    <div
      style={{
        height: `${height}px`,
        width: `${width}px`,
        backgroundColor: bgColor,
        margin: '0 1px',
        transition: 'height 0.1s ease-in-out',
      }}
    ></div>
  );
};

const SortingVisualizer: React.FC = () => {
  const [array, setArray] = useState<number[]>([]);
  const [animationSpeed, setAnimationSpeed] = useState<number>(10);
  const [arraySize, setArraySize] = useState<number>(50);
  const [isSorting, setIsSorting] = useState<boolean>(false);
  const [currentAlgorithm, setCurrentAlgorithm] = useState<string>("bubbleSort");
  const [comparisons, setComparisons] = useState<number>(0);
  const [swaps, setSwaps] = useState<number>(0);
  const [colorArray, setColorArray] = useState<string[]>([]);
  
  // Refs to keep track of animation timers
  const animationTimers = useRef<number[]>([]);

  // Generate random array on component mount and when array size changes
  useEffect(() => {
    resetArray();
  }, [arraySize]);

  // Clean up timers when component unmounts
  useEffect(() => {
    return () => {
      animationTimers.current.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  // Helper function to generate a random number in range
  const randomIntFromInterval = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  // Generate a new random array
  const resetArray = (): void => {
    if (isSorting) return;
    
    // Clear any existing timers
    animationTimers.current.forEach((timer) => clearTimeout(timer));
    animationTimers.current = [];
    
    // Reset counters
    setComparisons(0);
    setSwaps(0);
    
    const newArray: number[] = [];
    const newColorArray: string[] = [];
    
    for (let i = 0; i < arraySize; i++) {
      newArray.push(randomIntFromInterval(5, 500));
      newColorArray.push('#9A86A4'); // Default color (purple)
    }
    
    setArray(newArray);
    setColorArray(newColorArray);
  };

  // Start sorting with currently selected algorithm
  const startSort = (): void => {
    if (isSorting) return;
    setIsSorting(true);
    
    // Reset counters
    setComparisons(0);
    setSwaps(0);
    
    // Clear any existing timers
    animationTimers.current.forEach((timer) => clearTimeout(timer));
    animationTimers.current = [];
    
    // Call the appropriate sorting algorithm
    switch (currentAlgorithm) {
      case "bubbleSort":
        bubbleSort();
        break;
      // Add other sorting algorithms here
      case "mergeSort":
        mergeSort();
        break;
      default:
        bubbleSort();
        break;
    }
  };

  // Bubble Sort algorithm with animations
  const bubbleSort = (): void => {
    const arrayCopy = [...array];
    const animations: {indices: number[], swap: boolean}[] = [];
    let compCount = 0;
    let swapCount = 0;
    
    // Generate all the animation steps
    for (let i = 0; i < arrayCopy.length - 1; i++) {
      for (let j = 0; j < arrayCopy.length - i - 1; j++) {
        // Push the comparison animation
        animations.push({indices: [j, j + 1], swap: false});
        compCount++;
        
        if (arrayCopy[j] > arrayCopy[j + 1]) {
          // Swap elements
          [arrayCopy[j], arrayCopy[j + 1]] = [arrayCopy[j + 1], arrayCopy[j]];
          // Push the swap animation
          animations.push({indices: [j, j + 1], swap: true});
          swapCount++;
        }
      }
    }
    
    // Play the animations
    playAnimations(animations, compCount, swapCount);
  };

  // Play the sorting animations
  const playAnimations = (
    animations: {indices: number[], swap: boolean}[], 
    compCount: number, 
    swapCount: number
  ): void => {
    const newColorArray = [...colorArray];
    
    animations.forEach((animation, index) => {
      const timer = setTimeout(() => {
        const [i, j] = animation.indices;
        const arrayBars = [...array];
        
        if (!animation.swap) {
          // Comparison animation
          // Change color to highlight comparison
          newColorArray[i] = '#FF6B6B'; // Red
          newColorArray[j] = '#FF6B6B'; // Red
          setColorArray([...newColorArray]);
          
          // Change back to default color after a short delay
          setTimeout(() => {
            newColorArray[i] = '#9A86A4'; // Default color
            newColorArray[j] = '#9A86A4'; // Default color
            setColorArray([...newColorArray]);
          }, animationSpeed / 2);
          
          setComparisons((prev) => prev + 1);
        } else {
          // Swap animation
          [arrayBars[i], arrayBars[j]] = [arrayBars[j], arrayBars[i]];
          setArray([...arrayBars]);
          setSwaps((prev) => prev + 1);
          
          // Highlight bars being swapped
          newColorArray[i] = '#4ECB71'; // Green
          newColorArray[j] = '#4ECB71'; // Green
          setColorArray([...newColorArray]);
          
          // Change back to default color after a short delay
          setTimeout(() => {
            newColorArray[i] = '#9A86A4'; // Default color
            newColorArray[j] = '#9A86A4'; // Default color
            setColorArray([...newColorArray]);
          }, animationSpeed / 2);
        }
        
        // Check if this is the last animation
        if (index === animations.length - 1) {
          // Mark all bars as sorted
          setTimeout(() => {
            const sortedColors = colorArray.map(() => '#4ECB71'); // All green
            setColorArray(sortedColors);
            
            // Reset sorting state after animations complete
            setTimeout(() => {
              setIsSorting(false);
            }, 1000);
          }, animationSpeed);
        }
      }, index * animationSpeed);
      
      animationTimers.current.push(timer);
    });
  };

  // Stop sorting and reset
  const stopSort = (): void => {
    // Clear all timeouts
    animationTimers.current.forEach((timer) => clearTimeout(timer));
    animationTimers.current = [];
    setIsSorting(false);
    resetArray();
  };

  // Handle algorithm selection change
  const handleAlgorithmChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setCurrentAlgorithm(e.target.value);
  };

  // Handle array size change
  const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (isSorting) return;
    setArraySize(parseInt(e.target.value));
  };

  // Handle animation speed change
  const handleSpeedChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newSpeed = 110 - parseInt(e.target.value);
    setAnimationSpeed(newSpeed);
  };

  // Add this method inside your SortingVisualizer component

// Merge Sort algorithm with animations
const mergeSort = (): void => {
        const arrayCopy = [...array];
        const animations: {indices: number[], swap: boolean, overwrite?: {index: number, value: number}}[] = [];
        let compCount = 0;
        let swapCount = 0;
        
        // Helper function to perform merge sort
        const mergeSortHelper = (
          mainArray: number[], 
          startIdx: number, 
          endIdx: number, 
          auxiliaryArray: number[]
        ): void => {
          if (startIdx === endIdx) return;
          
          const middleIdx = Math.floor((startIdx + endIdx) / 2);
          
          // Sort left half
          mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray);
          // Sort right half
          mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray);
          // Merge the two halves
          doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray);
        };
        
        // Helper function to merge two sorted halves
        const doMerge = (
          mainArray: number[], 
          startIdx: number, 
          middleIdx: number, 
          endIdx: number, 
          auxiliaryArray: number[]
        ): void => {
          let k = startIdx;
          let i = startIdx;
          let j = middleIdx + 1;
          
          while (i <= middleIdx && j <= endIdx) {
            // Push comparison animation
            animations.push({indices: [i, j], swap: false});
            compCount++;
            
            if (auxiliaryArray[i] <= auxiliaryArray[j]) {
              // Overwrite value at index k with value at index i
              animations.push({
                indices: [k, i], 
                swap: false, 
                overwrite: {index: k, value: auxiliaryArray[i]}
              });
              mainArray[k++] = auxiliaryArray[i++];
            } else {
              // Overwrite value at index k with value at index j
              animations.push({
                indices: [k, j], 
                swap: false, 
                overwrite: {index: k, value: auxiliaryArray[j]}
              });
              mainArray[k++] = auxiliaryArray[j++];
              swapCount++;
            }
          }
          
          // Copy remaining elements from left side
          while (i <= middleIdx) {
            animations.push({indices: [i, i], swap: false});
            // Overwrite value at index k with value at index i
            animations.push({
              indices: [k, i], 
              swap: false, 
              overwrite: {index: k, value: auxiliaryArray[i]}
            });
            mainArray[k++] = auxiliaryArray[i++];
          }
          
          // Copy remaining elements from right side
          while (j <= endIdx) {
            animations.push({indices: [j, j], swap: false});
            // Overwrite value at index k with value at index j
            animations.push({
              indices: [k, j], 
              swap: false, 
              overwrite: {index: k, value: auxiliaryArray[j]}
            });
            mainArray[k++] = auxiliaryArray[j++];
          }
        };
        
        // Start the merge sort process
        const auxiliaryArray = arrayCopy.slice();
        mergeSortHelper(arrayCopy, 0, arrayCopy.length - 1, auxiliaryArray);
        
        // Play the animations
        playAnimationsWithOverwrite(animations, compCount, swapCount);
      };
      
      // Updated playAnimations function to handle merge sort overwrite operations
      const playAnimationsWithOverwrite = (
        animations: {indices: number[], swap: boolean, overwrite?: {index: number, value: number}}[], 
        compCount: number, 
        swapCount: number
      ): void => {
        const newColorArray = [...colorArray];
        const arrayBars = [...array];
        
        animations.forEach((animation, index) => {
          const timer = setTimeout(() => {
            const [i, j] = animation.indices;
            
            if (animation.overwrite) {
              // This is an overwrite operation (for merge sort)
              arrayBars[animation.overwrite.index] = animation.overwrite.value;
              setArray([...arrayBars]);
              
              // Highlight the bar being overwritten
              newColorArray[animation.overwrite.index] = '#4ECB71'; // Green
              setColorArray([...newColorArray]);
              
              // Change back to default color after a short delay
              setTimeout(() => {
                newColorArray[animation.overwrite.index] = '#9A86A4'; // Default color
                setColorArray([...newColorArray]);
              }, animationSpeed / 2);
            } else if (!animation.swap) {
              // Comparison animation
              // Change color to highlight comparison
              newColorArray[i] = '#FF6B6B'; // Red
              if (j < newColorArray.length) {
                newColorArray[j] = '#FF6B6B'; // Red
              }
              setColorArray([...newColorArray]);
              
              // Change back to default color after a short delay
              setTimeout(() => {
                newColorArray[i] = '#9A86A4'; // Default color
                if (j < newColorArray.length) {
                  newColorArray[j] = '#9A86A4'; // Default color
                }
                setColorArray([...newColorArray]);
              }, animationSpeed / 2);
              
              setComparisons((prev) => prev + 1);
            } else {
              // Swap animation
              [arrayBars[i], arrayBars[j]] = [arrayBars[j], arrayBars[i]];
              setArray([...arrayBars]);
              setSwaps((prev) => prev + 1);
              
              // Highlight bars being swapped
              newColorArray[i] = '#4ECB71'; // Green
              newColorArray[j] = '#4ECB71'; // Green
              setColorArray([...newColorArray]);
              
              // Change back to default color after a short delay
              setTimeout(() => {
                newColorArray[i] = '#9A86A4'; // Default color
                newColorArray[j] = '#9A86A4'; // Default color
                setColorArray([...newColorArray]);
              }, animationSpeed / 2);
            }
            
            // Check if this is the last animation
            if (index === animations.length - 1) {
              // Mark all bars as sorted
              setTimeout(() => {
                const sortedColors = colorArray.map(() => '#4ECB71'); // All green
                setColorArray(sortedColors);
                
                // Reset sorting state after animations complete
                setTimeout(() => {
                  setIsSorting(false);
                }, 1000);
              }, animationSpeed);
            }
          }, index * animationSpeed);
          
          animationTimers.current.push(timer);
        });
      };

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-6">Sorting Algorithm Visualizer</h1>
      
      <div className="mb-6 flex flex-wrap gap-4">
        <div>
          <label className="block mb-2">Algorithm:</label>
          <select 
            value={currentAlgorithm}
            onChange={handleAlgorithmChange}
            disabled={isSorting}
            className="p-2 rounded border bg-surface0 text-text"
          >
            <option value="bubbleSort">Bubble Sort</option>
            <option value="mergeSort">Merge Sort</option>
            {/* Add more sorting algorithms here */}
          </select>
        </div>
        
        <div>
          <label className="block mb-2">Array Size: {arraySize}</label>
          <input 
            type="range" 
            min="10" 
            max="100" 
            value={arraySize} 
            onChange={handleSizeChange}
            disabled={isSorting}
            className="w-32"
          />
        </div>
        
        <div>
          <label className="block mb-2">Speed: {110 - animationSpeed}%</label>
          <input 
            type="range" 
            min="10" 
            max="100" 
            value={110 - animationSpeed} 
            onChange={handleSpeedChange}
            disabled={isSorting}
            className="w-32" 
          />
        </div>
        
        <div>
          <button 
            onClick={resetArray}
            disabled={isSorting}
            className="p-2 bg-blue rounded text-text hover:bg-blue/80 disabled:opacity-50 mr-2"
          >
            Generate New Array
          </button>
          
          <button 
            onClick={startSort}
            disabled={isSorting}
            className="p-2 bg-green rounded text-text hover:bg-green/80 disabled:opacity-50 mr-2"
          >
            Start Sort
          </button>
          
          <button 
            onClick={stopSort}
            disabled={!isSorting}
            className="p-2 bg-red rounded text-text hover:bg-red/80 disabled:opacity-50"
          >
            Stop Sort
          </button>
        </div>
      </div>
      
      <div className="mb-4">
        <span className="mr-4">Comparisons: {comparisons}</span>
        <span>Swaps: {swaps}</span>
      </div>
      
      <div className="flex items-end justify-center h-[520px] border-b-2 border-text">
        {array.map((value, idx) => (
          <Bar 
            key={idx} 
            height={value} 
            width={Math.max(5, 1200 / arraySize - 2)} 
            bgColor={colorArray[idx]}
          />
        ))}
      </div>
    </div>
  );
};

export default SortingVisualizer;