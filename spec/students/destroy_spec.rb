require 'rails_helper'

RSpec.describe "students#destroy", type: :request do
  subject(:make_request) do
    jsonapi_delete "/api/v1/students/#{student.id}"
  end

  describe 'basic destroy' do
    let!(:student) { create(:student) }

    it 'updates the resource' do
      expect(StudentResource).to receive(:find).and_call_original
      expect {
        make_request
        expect(response.status).to eq(200), response.body
      }.to change { Student.count }.by(-1)
      expect { student.reload }
        .to raise_error(ActiveRecord::RecordNotFound)
      expect(json).to eq('meta' => {})
    end
  end
end
