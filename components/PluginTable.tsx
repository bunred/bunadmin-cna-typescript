import React from "react"
import dynamic from "next/dynamic"
import {
  PluginTableProps,
  TableSkeleton,
  handleSpecialPlugin
} from "@bunred/bunadmin"

function PluginTable({ team, group, name, hideLoading }: PluginTableProps) {
  const pluginPath = handleSpecialPlugin({ team, group, name })

  const Plugin = dynamic({
    loader: () => import(`../plugins/${pluginPath}`),
    loading: () =>
      hideLoading ? null : <TableSkeleton title={`${name} loading...`} />
  })

  return <Plugin />
}

export default PluginTable
