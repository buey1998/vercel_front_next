import React from "react"

export interface IPanelHeaderProps {
  title: string
  icon?: React.ReactNode
  adornmentButton?: React.ReactNode
  average?: string // For review content only
}

const PanelHeader = ({
  title,
  icon,
  adornmentButton,
  average
}: IPanelHeaderProps) => (
  <div className="mb-4 flex flex-wrap items-center justify-between rounded-2xl border-[1px] border-neutral-700 bg-neutral-800 lg:flex-nowrap">
    <div className="flex items-center p-3 font-neue-machina-semi text-sm uppercase text-neutral-400">
      {icon}
      <span className="ml-2 whitespace-nowrap">{title}</span>
      {average && <span className="ml-2 text-green-lemon">{average}</span>}
    </div>
    {adornmentButton}
  </div>
)

export default PanelHeader
