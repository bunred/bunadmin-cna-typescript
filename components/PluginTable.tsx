import React from "react"
import dynamic from "next/dynamic"
import {
  PluginTableProps,
  TableSkeleton,
  handlePluginPath
} from "@bunred/bunadmin"

function PluginTable({ team, group, name, hideLoading }: PluginTableProps) {
  const pluginPath = handlePluginPath({ team, group, name })

  const Plugin = dynamic({
    loader: () => import(`../plugins/dynamic/${pluginPath}`),
    loading: () =>
      hideLoading ? null : <TableSkeleton title={`${name} loading...`} />
  })

  return <Plugin />
}

export default PluginTable
