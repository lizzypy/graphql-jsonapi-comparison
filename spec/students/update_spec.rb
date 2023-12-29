require 'rails_helper'

RSpec.describe "students#update", type: :request do
  subject(:make_request) do
    jsonapi_put "/api/v1/students/#{student.id}", payload
  end

  describe 'basic update' do
    let!(:student) { create(:student) }

    let(:payload) do
      {
        data: {
          id: student.id.to_s,
          type: 'students',
          attributes: {
            # ... your attrs here
          }
        }
      }
    end

    # Replace 'xit' with 'it' after adding attributes
    xit 'updates the resource' do
      expect(StudentResource).to receive(:find).and_call_original
      expect {
        make_request
        expect(response.status).to eq(200), response.body
      }.to change { student.reload.attributes }
    end
  end
end
