import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import { Router } from "@routes/routes";

export default function useIndex() {
  const router = useRouter();
  const [search, setSearch] = useState<string>("");
  const [msgError, setMsgError] = useState<string>("");

  const handleSearchTeacher = (event: FormEvent) => {
    event.preventDefault();

    if (search.length >= 3) {
      Router.searchTeacher.push(router, search);
    } else {
      setMsgError("Minimum search length more or equals 3 is required");
    }
  };

  return { setSearch, msgError, handleSearchTeacher };
}
