import apiClient from "./apiClient";

const documentService = {

    async getDocuments(){

        const response = await apiClient.get(
            "/api/documents"
        );

        return response.data;

    },

    async deleteDocument(filename){

        const response = await apiClient.delete(

            `/api/documents/${encodeURIComponent(filename)}`

        );

        return response.data;

    }

};

export default documentService;