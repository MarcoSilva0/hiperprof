import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

export default function useIndex() {
  const router = useRouter();
  const [search, setSearch] = useState<string>("");
  const [msgError, setMsgError] = useState<string>("");

  const handleSearchTeacher = (event: FormEvent) => {
    event.preventDefault();

    if (search.length >= 3) {
        router.push("/teacher-search");
    } else {
        setMsgError('Minimum search length more or equals 3 is required')
    }
  };

  return { setSearch, msgError, handleSearchTeacher };
}
