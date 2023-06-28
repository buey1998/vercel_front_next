import React, { useCallback } from "react"
import toast from "react-hot-toast"
import { BaseToastComponent } from "../components"

const useToast = () => {
  const successToast = useCallback(
    (content: string) =>
      toast(
        (t) => (
          <BaseToastComponent
            onClose={() => toast.dismiss(t.id)}
            status="success"
            text={content}
          />
        ),
        {
          className: "toast toast--success  w-full"
        }
      ),
    []
  )
  const successImageToast = useCallback(
    (
      _content: string,
      _imageSrc: string,
      _size: string,
      _collect_qty: number
    ) =>
      toast(
        (t) => (
          <BaseToastComponent
            onClose={() => toast.dismiss(t.id)}
            status="success"
            text={_content}
            imageSrc={_imageSrc}
            size={_size}
            count={_collect_qty}
          />
        ),
        {
          className: "toast toast--success"
        }
      ),
    []
  )
  const infoToast = useCallback(
    (content: string) =>
      toast((t) => (
        <BaseToastComponent
          onClose={() => toast.dismiss(t.id)}
          status="info"
          text={content}
        />
      )),
    []
  )

  const warnToast = useCallback(
    (content: string) =>
      toast(
        (t) => (
          <BaseToastComponent
            onClose={() => toast.dismiss(t.id)}
            status="warning"
            text={content}
          />
        ),
        {
          className: "toast toast--warning w-full"
        }
      ),
    []
  )

  const errorToast = useCallback(
    (
      content: string,
      duration?: number,
      confirmation?: boolean,
      handleClickYes?: () => void,
      handleClickNo?: () => void
    ) =>
      toast(
        (t) => (
          <BaseToastComponent
            onClose={() => toast.dismiss(t.id)}
            handleClickYes={handleClickYes}
            handleClickNo={handleClickNo}
            status="error"
            text={content}
            confirmation={confirmation}
          />
        ),
        {
          className: "toast toast--error w-full",
          duration: duration ?? 5000
        }
      ),
    []
  )

  const sampleToast = useCallback((content: string) => {
    toast(
      (t) => (
        <BaseToastComponent
          onClose={() => toast.dismiss(t.id)}
          status="inherit"
          text={content}
        />
      ),
      {
        className: "toast toast--sample  w-full"
      }
    )
  }, [])

  return {
    successToast,
    successImageToast,
    infoToast,
    warnToast,
    errorToast,
    sampleToast
  }
}

export default useToast
