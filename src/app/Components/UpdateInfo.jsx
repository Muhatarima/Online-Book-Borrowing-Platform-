"use client";

import { authClient } from "@/lib/auth-client";
import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import toast, { Toaster } from "react-hot-toast";

export default function UpdateInfo() {  
  const onSubmit = async (e) => {      
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;

    try {
      const { error } = await authClient.updateUser({ name, email });

      if (error) {
        toast.error(error.message || "Update failed!");
        return;
      }

      toast.success("Profile updated!");
    } catch (err) {
      toast.error("Something went wrong.");
    }
  };

  return (
    <Modal>
      <Toaster />
      <Button variant="secondary">Update Profile</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft user-select-none">
                <Envelope className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Update Profile</Modal.Heading>
            </Modal.Header>

            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="flex flex-col gap-4">

                  <TextField className="w-full" name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>

                  <TextField className="w-full" name="email" type="email">
                    <Label>Email</Label>
                    <Input placeholder="Enter your email" />
                  </TextField>

                  <Modal.Footer>
                    <Button slot="close" variant="secondary">Cancel</Button>
                    <Button type="submit" slot="close">Save</Button>
                  </Modal.Footer>

                </form>
              </Surface>
            </Modal.Body>

          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}