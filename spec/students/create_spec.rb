require 'rails_helper'

RSpec.describe "students#create", type: :request do
  subject(:make_request) do
    jsonapi_post "/api/v1/students", payload
  end

  describe 'basic create' do
    let(:params) do
      attributes_for(:student)
    end
    let(:payload) do
      {
        data: {
          type: 'students',
          attributes: params
        }
      }
    end

    it 'works' do
      expect(StudentResource).to receive(:build).and_call_original
      expect {
        make_request
        expect(response.status).to eq(201), response.body
      }.to change { Student.count }.by(1)
    end
  end
end
