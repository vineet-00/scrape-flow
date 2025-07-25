"use client"
import { Button } from "@/components/ui/button"
import { CheckIcon } from "lucide-react"
import { useMutation } from "@tanstack/react-query"
import { useReactFlow } from "@xyflow/react"
import { toast } from "sonner"
import { UpdateWorkflow } from "@/actions/workflows/updateWorkflow"

export const SaveBtn = ({workflowId} : {workflowId: string}) => {
  
  const {toObject} = useReactFlow()
  const saveMutation = useMutation({
    mutationFn: UpdateWorkflow,
    onSuccess: () => {
      toast.success("Flow saved successfully", {id: "save-workflow"})
    },
    onError: () => {
      toast.error("Something went wrong", {id:"save-workflow"})
    }
  })
  return (
    <Button
      disabled={saveMutation.isPending}
      variant={"outline"}
      className="flex items-center gap-2"
      onClick={() => {
        const workflowDefinition = JSON.stringify(toObject())
        toast.loading("Saving workflow...", {id:"save-workflow"})
        saveMutation.mutate({
          id: workflowId,
          definition: workflowDefinition,
        })
      }}
    >
      <CheckIcon size={16} className="stroke-green-400" />
      Save
    </Button>
  )
}

export default SaveBtn