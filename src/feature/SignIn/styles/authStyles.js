// SignIn feature specific styles
export const authStyles = {
  // Container styles
  container: "min-h-[calc(100dvh-96px)] grid place-items-center flex",
  wrapper: "w-full max-w-[1120px]",
  
  // Form styles
  form: {
    base: "mx-auto border-2 rounded-2xl shadow-sm px-10 md:px-12 py-10 flex flex-col justify-between gap-5",
    widths: "w-[360px] md:w-[560px] lg:w-[660px]",
    minHeights: "min-h-[360px] md:min-h-[460px]"
  },
  
  // Grid layouts
  grid: {
    emailButton: "grid grid-cols-[minmax(0,1fr)_200px] gap-x-6 items-start gap-y-7",
    fullWidth: "col-span-2"
  },
  
  // Input styles
  input: {
    base: "text-sm md:text-base h-11",
    withMargin: "text-sm md:text-base h-11 mb-1",
    withTopMargin: "text-sm md:text-base w-full h-11 mt-5 mb-20"
  },
  
  // Button styles
  button: {
    // Primary button (submit buttons)
    primary: `
      w-64 h-11 rounded-[15px] font-semibold cursor-pointer
      transition-colors duration-200
      !bg-[var(--color-primary)] hover:!bg-[color-mix(in_srgb,var(--color-primary)_90%,black)]
      !text-white !border-transparent
      focus-visible:!ring-2 focus-visible:!ring-[var(--color-primary)]/40 focus-visible:!ring-offset-2
      disabled:!bg-[var(--color-primary)]/50 disabled:cursor-not-allowed
    `,
    
    // Secondary button (send code button)
    secondary: `
      w-full h-11 text-sm mb-3 rounded-[15px]
      transition-colors duration-200
      !bg-white !text-[var(--color-primary)] !border !border-[var(--color-primary)]
      hover:!bg-[var(--color-primary)] hover:!text-[#FFF]
      focus-visible:!ring-2 focus-visible:!ring-[var(--color-primary)]/40 focus-visible:!ring-offset-2
      disabled:opacity-50 disabled:pointer-events-none
    `,
    
    // Text button (back button)
    text: "text-sm text-gray-500 hover:text-gray-700",
    
    // Full width button
    fullWidth: "px-8 py-3 md:px-12 md:py-3 rounded-[5px] w-full sm:w-auto text-sm md:text-base",
    
    // Fixed width button
    fixedWidth: "px-12 py-3 rounded-[5px] text-base"
  },
  
  // Typography styles
  typography: {
    heading: "text-2xl font-bold mb-[48px] text-center",
    subheading: "text-lg md:text-xl font-medium text-gray-900 mb-2",
    description: "text-sm md:text-base text-gray-600"
  },
  
  // Layout styles
  layout: {
    centerButton: "mt-2 flex justify-center",
    centerContent: "flex justify-center",
    centerVertical: "flex flex-col h-full justify-center items-center p-6",
    flexColumn: "flex flex-col h-full p-4 md:p-6",
    gap: "flex flex-col gap-4 md:gap-6 flex-1",
    marginTop: "mt-4",
    marginTopLarge: { marginTop: "30px" }
  },
  
  // State styles
  disabled: "opacity-50",
  
  // Container dimensions
  dimensions: {
    buttonContainer: "self-start w-[200px]"
  }
};