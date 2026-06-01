import { Button, Input, Label, Modal, Surface, TextField } from '@heroui/react';
import { PersonPlus, Plus } from "@gravity-ui/icons";

import React from 'react';

const AddUserModal = () => {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl px-6 shadow-[0_0_40px_rgba(59,130,246,0.15)]">

            <Modal>
                <Button variant="secondary"><Plus></Plus> Add a new user</Button>
                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-md">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                    <PersonPlus className="size-5" />
                                </Modal.Icon>
                                <Modal.Heading>Add a new user</Modal.Heading>
                                <p className="mt-1.5 text-sm leading-5 text-muted">
                                    Fill out the form below and we will get back to you.
                                </p>
                            </Modal.Header>
                            <Modal.Body className="p-6">
                                <Surface variant="default">
                                    <form className="flex flex-col gap-4">
                                        <TextField className="w-full" name="name" type="text" variant="secondary">
                                            <Label>Name</Label>
                                            <Input placeholder="Enter your name" />
                                        </TextField>
                                        <TextField className="w-full" name="email" type="email" variant="secondary">
                                            <Label>Email</Label>
                                            <Input placeholder="Enter your email" />
                                        </TextField>
                                        <TextField className="w-full" name="role" type="text" variant="secondary">
                                            <Label>Role</Label>
                                            <Input placeholder="Enter your role" />
                                        </TextField>

                                    </form>
                                </Surface>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button slot="close" variant="secondary">
                                    Cancel
                                </Button>
                                <Button slot="close">Add User</Button>
                            </Modal.Footer>
                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    );
};

export default AddUserModal;