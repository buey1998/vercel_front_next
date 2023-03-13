import { useMutation } from "@tanstack/react-query"
import { createRoom } from "../containers/services/rooms.service"

const useCreateRoom = () => {
  const {
    mutateAsync: mutateCreateRoom,
    data: createRoomData,
    isLoading,
    isError,
    error,
    isSuccess,
    failureReason
  } = useMutation(createRoom, {
    mutationKey: ["createRoom"],
    retry: false
  })

  return {
    mutateCreateRoom,
    createRoomData,
    isLoading,
    isError,
    error,
    isSuccess,
    failureReason
  }
}

export default useCreateRoom
