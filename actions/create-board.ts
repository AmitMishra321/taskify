"use server";

import { revalidatePath } from "next/cache";
import { db } from "../lib/db";
import { z } from "zod";
import { redirect } from "next/navigation";

export type State = {
  errors?: {
    title?: string[];
  };
  message: string | null;
};
const CreateBoard = z.object({
  title: z.string().min(3, {
    message: "Minimum length of 3 letters is required",
  }),
});
export async function create(prevState: State, formData: FormData) {
  // const title = formData.get("title") as string;

  const validatedFields = CreateBoard.safeParse({
    title: formData.get("title"),
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields .",
    };
  }

  const { title } = validatedFields.data;

  try {
    await db.board.create({
      data: {
        title,
      },
    });
  } catch (e) {
    return {
      message: "Database Error",
    };
  }

  revalidatePath("/organization/org_2jvKJRuVCB1ng7ekUqmLJb0A8RW");
  redirect("/organization/org_2jvKJRuVCB1ng7ekUqmLJb0A8RW");
}
