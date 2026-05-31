import { Table } from '@heroui/react';
import React from 'react';

const UserTable = ({ users }) => {


    return (
        <div>
            <Table>
                <Table.ScrollContainer>
                    <Table.Content aria-label="Team members" className="min-w-150">
                        <Table.Header>
                            <Table.Column isRowHeader>Name</Table.Column>
                            <Table.Column>Email</Table.Column>
                            <Table.Column>Role</Table.Column>
                            <Table.Column>Action</Table.Column>
                        </Table.Header>

                        <Table.Body>
                            {
                                users.map(user =>
                                    <Table.Row key={user._id}>
                                        <Table.Cell>{user.name}</Table.Cell>
                                        <Table.Cell>{user.email}</Table.Cell>
                                        <Table.Cell>{user.role}</Table.Cell>
                                        <Table.Cell>Delete</Table.Cell>
                                    </Table.Row>
                                )
                            }

                        </Table.Body>
                    </Table.Content>
                </Table.ScrollContainer>
            </Table>
        </div>
    );
};

export default UserTable;