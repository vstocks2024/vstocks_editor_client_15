"use client";
export type UploadButtonProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  accept: string;
};
export const UploadButton = (props: UploadButtonProps) => {
  return (
    <label htmlFor="fileInput" className={`${props.className} bg-white text-black w-[90%]`}>
      <input
        id="fileInput"
        type="file"
        accept={props.accept}
        className="hidden"
        onChange={props.onChange}/>
      Upload
    </label>
  );
};
